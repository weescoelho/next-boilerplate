import { Main } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title Default',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

Basic.args = {
  title: 'Teste de Controles',
};
