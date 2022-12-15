import {
  Box,
  Button,
  Group,
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

  const handleSubmit = () => {
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
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <h1>News Form</h1>
        <TextInput
          size="sm"
          required
          label="Title"
          placeholder="News title..."
          {...form.getInputProps("title")}
        />
        <TextInput
          size="sm"
          required
          label="Subtitle"
          placeholder="News subtitle..."
          {...form.getInputProps("subTitle")}
        />
        <Textarea
          size="sm"
          required
          label="Content"
          placeholder="News content..."
          {...form.getInputProps("content")}
        />
        <TextInput
          size="sm"
          label="Video"
          placeholder="Embedded video..."
          {...form.getInputProps("video")}
        />
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
        <Group>
          <Button onClick={() => navigate("/news")}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
