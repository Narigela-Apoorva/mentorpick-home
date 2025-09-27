import React from "react";
import CoursesPage from "../Courses/CoursesPage";
import { useNavigate } from "react-router-dom";
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
import { IconCalendar } from "@tabler/icons-react";

// Sample Data


const upcomingEvents = [
  { id: 1, title: "React Workshop", date: "Oct 5, 2025" },
  { id: 2, title: "AI Bootcamp", date: "Oct 12, 2025" },
  { id: 3, title: "UI/UX Design Conference", date: "Oct 20, 2025" },
];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}

      <div
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
          color: "white",
          padding: "6rem 1rem",
          textAlign: "center",
        }}
      >
        <Title order={1} style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Elevate your coding skills to the next level
        </Title>
        <Text
          size="lg"
          style={{ maxWidth: 600, margin: "auto", marginBottom: "2rem" }}
        >
          Embrace 'Being Zero' - where learning meets empowerment, humility
          fuels success. Our graduates now thrive in top-tier giants like
          Microsoft, Amazon, Salesforce, and beyond!
        </Text>
        <Group position="center" spacing="xl">
          <Button
            size="lg"
            radius="xl"
            color="yellow"
            onClick={() => navigate("/Courses")}
          >
            Explore Courses
          </Button>
          <Button size="lg" radius="xl" variant="outline" color="white">
            Browse Events
          </Button>
        </Group>
      </div>

      <Container my="xl">
        {/* Featured Courses */}
        

        {/* Upcoming Events */}
        <Title order={2} mt="xl" mb="xl" align="center">
          Upcoming Events
        </Title>
        <Grid gutter="md">
          {upcomingEvents.map((event) => (
            <Grid.Col key={event.id} xs={12} sm={6} md={4}>
              <Card
                shadow="md"
                padding="lg"
                radius="md"
                withBorder
                className="hover:shadow-xl transition-all duration-300"
              >
                <Group spacing="sm" align="center" mb="sm">
                  <IconCalendar size={22} color="#1D4ED8" />
                  <Text weight={500}>{event.title}</Text>
                </Group>
                <Text size="sm" color="dimmed">
                  {event.date}
                </Text>
                <Button
                  fullWidth
                  mt="md"
                  radius="xl"
                  variant="outline"
                  color="blue"
                  className="hover:scale-105 transition-transform"
                >
                  View Details
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <div
        style={{
          background: "#1f2937",
          color: "white",
          textAlign: "center",
          padding: "3rem 1rem",
          marginTop: "4rem",
        }}
      >
        <Text mb="sm">© 2025 MentorPick. All rights reserved.</Text>
        <Group position="center" spacing="xl">
          <Text component="a" href="/" color="gray" size="sm">
            Home
          </Text>
          <Text component="a" href="/courses" color="gray" size="sm">
            Courses
          </Text>
          <Text component="a" href="/events" color="gray" size="sm">
            Events
          </Text>
          <Text component="a" href="/contact" color="gray" size="sm">
            Contact
          </Text>
        </Group>
      </div>
    </>
  );
};

export default HomePage;
