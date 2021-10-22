import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProductsListComponent } from './products-list.component';

export default {
  title: 'ProductsListComponent',
  component: ProductsListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ProductsListComponent>;

const Template: Story<ProductsListComponent> = (args: ProductsListComponent) => ({
  component: ProductsListComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  products:  [
    {
      name: 'Krzesło konferencyjne',
      price: '100 zł',
      imageUrl: 'https://iili.io/5qhfRV.jpg'
    },
    {
      name: 'Krzesło ISO',
      price: '100 zł',
      imageUrl: 'https://iili.io/5qhfRV.jpg'
    }
  ],
  isLoading: false
}

export const Loading = Template.bind({});
Loading.args = {
  products:  [],
  isLoading: true
}
