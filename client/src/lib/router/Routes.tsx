import React from 'react';
import { useRouter } from './Router';

interface RoutesProps {
  children?: React.ReactNode;
}

export default function Routes({ children }: RoutesProps) {
  const { path } = useRouter();

  const matches: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      return;
    }
    if (child.props.path === path) {
      matches.push(child.props.children);
    }
  });

  if (matches.length === 0) {
    window.location.replace('/404');
  }

  return <>{matches}</>;
}
