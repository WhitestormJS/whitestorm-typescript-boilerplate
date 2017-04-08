import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { Cube } from './index';

describe('<Cube />', () => {

  const component = renderComponent(Cube);

  it('Has an h4 element that says Cube', () => {
    expect(component.find('h4').text()).eql('Cube');
  });

});
