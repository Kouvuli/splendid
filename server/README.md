# 1. Folder Struture:

- Folder src: Contains source code of server
- Folder Script: Contains database sql scipt for creating table and sample data
- pom.xml: packages management

# 2. API Documents:

-   Jikan API (v4): [Watch here](https://docs.api.jikan.moe/)
-   Splendid API (v1): [Watch here](https://documenter.getpostman.com/view/17594467/UzR1K2eW) 

<br>

# 3. Response format:
## 3.1 Success response format:

-   **With no pagination**
<table>
  <tr>
    <th>Splendid API</th>
    <th>Jikan API</th>
  </tr>
  <tr>
    <td>{<pre>"status":"ok",<br>"message":"",<br>"data":{<br> ... <br>}</pre>}</td>
    <td>{<pre>"data":{<br>...<br>}</pre>}</td>
  </tr>
</table>

<br>

-   **With pagination**

<table>
  <tr>
    <th>Splendid API</th>
    <th>Jikan API</th>
  </tr>
  <tr>
    <td>{<pre>"pagination": {
    "last_visible_page": ,
    "has_next_page": ,
    "current_page":,
    "limit":
  },
  "status": "ok",
  "message": "",
  "data": [
    ...
  ]</pre>}</td>
    <td>{<pre>"pagination": {
  "last_visible_page": ,
  "has_next_page": ,
  "current_page": ,
  "items": {
      "count": ,
      "total": ,
      "per_page": 
  }
},
"data": [
  ...
]</pre>}</td>
  </tr>
</table>


### JWT response:
<table>
  <tr>
    <th>Splendid API</th>
  </tr>
  <tr>
    <td>{<pre>"token":"",
  "id":,
  "username":</pre>}</td>
  </tr>
</table>
```
{
  "token":"",
  "id":,
  "username":

}
```

## 3.2 Error response format:

### With no pagination

```
{
  "status":"failed",
  "message":""
  "data": {
    ...
  }
}
```

### With pagination

```
{
  "pagination": {
    "last_visible_page": ,
    "has_next_page": ,
    "current_page":,
    "limit":
  },
  "status": "failed",
  "message": "",
  "data": [
    ...
  ]
}
```

### JWT response:

```
{
  "path": "",
  "error": "",
  "message": "",
  "status":
}
```


# 3. Hosts:
- Server Host: https://splendid-app-server.herokuapp.com
- Local Host:http://localhost:9090
