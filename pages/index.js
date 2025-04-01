import React from 'react';
import Link from '../src/components/Link';

function Title({ children, as = 'h1' }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </React.Fragment>
  );
}

export default function HomePage() {
  return (
    <div>
      <Title as="h2">Alura Case - Divulgação</Title>
      <Link href="/faq" passHref>Faq</Link>
    </div>
  );
}

