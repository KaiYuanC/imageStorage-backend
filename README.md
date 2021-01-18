# imageStorage-backend

This code allows you to add, delete, search, and modify for a image by ID.

This code uses: 

- Node.js
- MongoDB Clusters

An image is defined with: 
```
name: String
imageUrl: String
liked: Boolean
date: Date
```
You can run the code by clone the repo and sending requests from Postman: 

- GET `http://localhost:3000/images/` returns a list of all images
- GET `http://localhost:3000/images/<_id>` returns a specific image you searched
- POST `http://localhost:3000/images` adds a image with the provided body
- PATCH `http://localhost:3000/images/<_id>` modifies a field of an image with the provided body

Future Improvements and Add ons:
- Ability to search an image by name
- Ability to like and unlike an image
