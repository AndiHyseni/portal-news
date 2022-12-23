import {
  Box,
  Button,
  Card,
  Group,
  Image,
  Select,
  Switch,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mantine/dates";
import { useCategories } from "../../hooks/useCategories/useCategories";
import { Categories } from "../../types/categories/categories";
import { useState } from "react";
import { ApiError, ErrorMessage } from "../../types/auth/ApiError";
import { useCreateNews } from "../../hooks/useCreateNews/useCreateNews";
import "../Forms/NewsForms.css";
import React from "react";
import { Label } from "semantic-ui-react";

export interface NewsFormProps {
  newsId: number;
}

export const NewsForms: React.FC<NewsFormProps> = (newsId) => {
  const navigate = useNavigate();
  const createNewsMutation = useCreateNews();
  const [isFeatured, setIsFeatured] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const [categoryId, setCategoryId] = useState<string | null>("");

  const { data } = useCategories();

  const categoryOptions = data
    ? data.map((category: Categories) => ({
        value: category.categoryId.toString(),
        label: category.name,
      }))
    : [];

  const form = useForm({
    initialValues: {
      newsId: 0,
      categoryId: 0,
      content: "",
      expireDate: "",
      image: "",
      isDeleted: false,
      isFeatured: false,
      subTitle: "",
      tags: "",
      title: "",
      video: "",
    },
  });

  const [image, setimage] = useState() as any;
  const [tags, setTags] = useState([]) as any;

  const changefile = (event: any) => {
    let v = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(v[0]);
    reader.onload = (e) => {
      setimage(e.target?.result);
    };
  };

  function handleKeyDown(e: any) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index: any) {
    setTags({ ...tags.filter((el: any, i: any) => i !== index) });
  }

  const handleSubmit = (News: any) => {
    News.image = image;
    News.tags = tags.join(",");
    createNewsMutation.mutate(
      {
        ...form.values,
        newsId: +form.values.newsId,
        categoryId: categoryId ? Number(categoryId) : 0,
        isDeleted: form.values.isDeleted === true ? true : false,
        isFeatured: form.values.isFeatured === true ? true : false,
      },
      {
        onSuccess: () => {
          navigate("/news");
        },
        // onError: (error: AxiosError<ApiError>) => {
        //   if (
        //     error.response?.data.errorMessage === ErrorMessage.MORE_CARACTERS
        //   ) {
        //     form.setFieldError("title", "error");
        //   }
        // },
      }
    );
  };

  return (
    <Box>
      <form className="addNewsForm" onSubmit={form.onSubmit(handleSubmit)}>
        <h1 className="addNewsHeader">News Form</h1>
        <hr />
        <TextInput
          className="addNewsElement"
          size="sm"
          required
          label="Title"
          placeholder="News title..."
          {...form.getInputProps("title")}
        />
        <TextInput
          className="addNewsElement"
          size="sm"
          required
          label="Subtitle"
          placeholder="News subtitle..."
          {...form.getInputProps("subTitle")}
        />
        <Textarea
          className="addNewsElement"
          size="sm"
          required
          label="Content"
          placeholder="News content..."
          {...form.getInputProps("content")}
        />
        <TextInput
          className="addNewsElement"
          size="sm"
          label="Video"
          placeholder="Embedded video..."
          {...form.getInputProps("video")}
        />
        <div className="addNewsSpecialDiv">
          <DatePicker
            size="sm"
            placeholder="Expire date..."
            label="Expire Date"
            required
            withAsterisk
            {...form.getInputProps("expireDate")}
          />
          <Select
            label="Category"
            placeholder="Category..."
            data={categoryOptions}
            searchable
            maxDropdownHeight={400}
            required
            value={categoryId}
            onChange={(categoryId) => setCategoryId(categoryId)}
          />
          <Switch
            label="is Featured"
            checked={isFeatured}
            onChange={(event) => setIsFeatured(event.currentTarget.checked)}
          />
          <Switch
            label="is Deleted"
            checked={isDeleted}
            onChange={(event) => setIsDeleted(event.currentTarget.checked)}
          />
        </div>
        <div className="addNewsElement">
          {tags.map((tag: any, index: any) => (
            <div className="tag-item" key={index}>
              <span className="text">{tag}</span>
              <span className="close" onClick={() => removeTag(index)}>
                &times;
              </span>
            </div>
          ))}
          <TextInput
            onKeyDown={handleKeyDown}
            type="text"
            className="tags-input"
            placeholder="Press enter to add new tag"
            {...form.getInputProps("tags")}
          />
        </div>
        <div className="addNewsImage">
          <Image src={image} width={650} height={400} />
          <Card className="addNewsButton">
            <input
              type="file"
              hidden
              style={{ marginTop: "200px" }}
              id="file"
              onChange={changefile}
            />
            <label htmlFor="file" className="btn" style={{ marginTop: "10px" }}>
              <Label content="Upload Image" color="blue" />
            </label>
          </Card>
        </div>
        <Group className="addNewsButtons">
          <Button onClick={() => navigate("/news")}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
