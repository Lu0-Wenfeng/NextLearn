import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Tailwind,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello, {name}.</Text>
            <Link href="www.condewithmosh.com">www.condewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// const body: CSSProperties = { background: "white" };
// const heading: CSSProperties = { fontSize: "24px", fontWeight: "bold" };

export default WelcomeTemplate;
