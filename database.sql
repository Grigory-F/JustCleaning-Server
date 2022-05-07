CREATE OR REPLACE FUNCTION add_movie(title VARCHAR(70), production_year INTEGER) 
 RETURNS void AS $$
   DECLARE phonetic_code VARCHAR(70);
 BEGIN
   SELECT soundex(title) INTO phonetic_code;
   RAISE NOTICE 'The phonetic code for % is %', title, phonetic_code;
   INSERT INTO title (title, production_year, phonetic_code, kind_id) VALUES (title, production_year, phonetic_code, 1);
   COMMIT;
 END;
 $$ LANGUAGE plpgsql;
