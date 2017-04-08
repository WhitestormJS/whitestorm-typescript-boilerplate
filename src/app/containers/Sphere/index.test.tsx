import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { Sphere } from './index';

describe('<Sphere />', () => {

  const component = renderComponent(Sphere);

  it('Renders header with text', () => {
    expect(component.find('h4').text()).to.eql('Sphere');
  });

});
