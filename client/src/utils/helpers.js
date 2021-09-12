export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + "s";
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to the database, version 1
    const request = window.indexedDB.open("shop-shop", 1);

    // create variables to hold reference to the db, transaction, and object store
    let db, tx, store;

    //initial values/ on new version
    request.onupgradeneeded = function (e) {
      const db = request.result;
      // create object store for each type of data and set "primary" key index to '_id" on data
      db.createObjectStore("products", { keyPath: "_id" });
      db.createObjectStore("categories", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
    };

    // handle errors
    request.onerror = function (e) {
      console.log("there was an error");
    };

    // on database open success
    request.onsuccess = function (e) {
      // save db to db variable
      db = request.result;
      // transaction for passing into store
      tx = db.transaction(storeName, "readwrite");
      // save a reference to that object store
      store = tx.objectStore(storeName);

      // errors
      db.onerror = function (e) {
        console.log("error", e);
      };

      switch (method) {
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No valid method");
          break;
      }

      // transaction complete close connection
      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
