import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import AuthenticationForm from '@/components/Login/AuthenticationForm';

/**
 * IndexPage serves as the main entry point for the login screen.
 * It utilizes MainAppLayout to center the AuthenticationForm in the viewport.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <AuthenticationForm />
    </MainAppLayout>
  );
};

export default IndexPage;
