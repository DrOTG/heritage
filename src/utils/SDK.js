export class ResponseError extends Error {
  constructor(responseData) {
    super(responseData.message);
    this.name="ResponseError";
  }
}

export class SDK {
  access_token;
  base_url="https://heritage.mitsar.org";

  static auth(access_token) {
    const sdk = new SDK();
    sdk.access_token = access_token;
    return sdk;
  }

  async fetchWrapper(path,{
    method="GET",
    body=null,
    headers={}
  }) {
    const response = await fetch(`${this.base_url}${path}`,{
      method:method,
      body: body ? JSON.stringify(credentials) : null,
      headers:{
        "Content-Type":"application/json",
        "Authorization":this.access_token ? `Bearer ${this.access_token}` : null,
        ...headers
      }
    });

    const data = await response.json();
    const statusCode = response.status;
    return {data,statusCode};
  }

  async login(credentials={email, password}) {    
    const {data, statusCode} = await this.fetchWrapper("/api/auth/login",{
      method:"POST",
      body:credentials,
    });

    if(statusCode === 200) {
      return await data;
    } else {
      throw new ResponseError(data);
    }
  }

  async register(userData={name,email,password}) {
    const {data, statusCode} = await this.fetchWrapper("/api/auth/register",{
      method:"POST",
      body:userData,
    });

    if(statusCode === 200) {
      return await data;
    } else {
      throw new ResponseError(data);
    }
  }
}