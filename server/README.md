# 1. Folder Struture:

- Folder src: Contains source code of server

- Folder Script: Contains database sql scipt for creating table and sample data

# 2. API:

## Documentation and example: [View here](https://documenter.getpostman.com/view/17594467/UzR1K2eW)

<br>

## Success response format:

### With no pagination

```
{
  "status":"ok",
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
  "status": "ok",
  "message": "",
  "data": [
    ...
  ]
}
```

### JWT response:

```
{
  "token":"",
  "id":,
  "username":

}
```

## Error response format:

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

### Server Host: https://splendid-app-server.herokuapp.com

### Local Host:http://localhost:9090
