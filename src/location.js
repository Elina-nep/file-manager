 class Location {

   constructor(path) {
     this.path = path;
   }

   setPath(newPath) {
     this.path = newPath;
   }

   getPath() {
     return this.path
   }

 }

 export const currentDir = new Location('')