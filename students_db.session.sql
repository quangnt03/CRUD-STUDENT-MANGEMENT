DROP TABLE IF EXISTS public.students;
CREATE TABLE IF NOT EXISTS public.students
(
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    mid_name character varying(50),
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    dob date NOT NULL,
    grade smallint NOT NULL,
    class_name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    current_address character varying(200) COLLATE pg_catalog."default" NOT NULL,
    literature_mark double precision NOT NULL,
    math_mark double precision NOT NULL,
    english_mark double precision NOT NULL,
    student_id uuid NOT NULL DEFAULT gen_random_uuid(),
    CONSTRAINT students_pkey PRIMARY KEY (student_id),
    CONSTRAINT grade CHECK(grade > 0 and grade < 13),
    CONSTRAINT literature_mark CHECK(literature_mark >= 0 and literature_mark <= 10),
    CONSTRAINT math_mark CHECK(math_mark >= 0 and math_mark <= 10),
    CONSTRAINT english_mark CHECK(english_mark >= 0 and english_mark <= 10)
)

TABLESPACE pg_default;
