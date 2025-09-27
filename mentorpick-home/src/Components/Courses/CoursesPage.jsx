import React from "react";
import {
  Container,
  Grid,
  Card,
  Image,
  Text,
  Title,
  Button,
  Group,
  Badge,
} from "@mantine/core";

// Sample Courses
const featuredCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Learn React, Node.js, MongoDB & more to build modern web apps.",
    instructor: "John Doe",
    duration: "12 weeks",
    image: "https://source.unsplash.com/400x200/?coding,programming",
    level: "Beginner",
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Master ML algorithms, Python, TensorFlow & AI applications.",
    instructor: "Jane Smith",
    duration: "10 weeks",
    image: "https://source.unsplash.com/400x200/?ai,robotics",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description:
      "Design intuitive interfaces with Figma, Adobe XD & prototyping.",
    instructor: "Alex Lee",
    duration: "8 weeks",
    image: "https://source.unsplash.com/400x200/?design,ux",
    level: "Beginner",
  },
];

export default function CoursesPage() {
  return (
    <Container my="xl">
      <Title order={2} mb="xl" align="center">
        Featured Courses
      </Title>
      <Grid gutter="md">
        {featuredCourses.map((course) => (
          <Grid.Col key={course.id} xs={12} sm={6} md={4}>
            <Card
              shadow="lg"
              padding="lg"
              radius="md"
              withBorder
              className="hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <Card.Section>
                <Image
                  src={course.image}
                  height={180}
                  alt={course.title}
                  radius="md"
                />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Title order={4}>{course.title}</Title>
                <Badge color="blue" variant="light">
                  {course.level}
                </Badge>
              </Group>
              <Text size="sm" color="dimmed">
                {course.description}
              </Text>
              <Text size="sm" mt="sm">
                Instructor: {course.instructor}
              </Text>
              <Text size="sm">Duration: {course.duration}</Text>
              <Button
                fullWidth
                mt="md"
                radius="xl"
                color="indigo"
                className="hover:scale-105 transition-transform"
              >
                Enroll Now
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
