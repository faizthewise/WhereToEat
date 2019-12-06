import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers:{
    Authorization: 'Bearer dGpau6GKq4TPvXXy4qzIFBBX5Yw4ntgZztGyLdHByt2do-kqrJWDzeFt2SAv7NSRGnodBjctXlVgrdwIY0NXGKOFyWyEkv-f0j-x_J1fB4XODxtreVMKv-dyaJDFXXYx'
  }
});
