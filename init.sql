CREATE TABLE recipes (

   id SERIAL PRIMARY KEY,
   recipe_name VARCHAR(255) NOT NULL,
   ingredients VARCHAR(255),
   cook_method VARCHAR(255),
   cook_time VARCHAR(255),
   created_by VARCHAR(255),
   created_at TIMESTAMPTZ NOT NULL,
   updated_at TIMESTAMPTZ NOT NULL

)