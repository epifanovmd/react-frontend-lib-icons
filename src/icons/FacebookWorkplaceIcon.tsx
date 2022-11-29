import React, { FC, memo } from 'react';
import FacebookWorkplaceSvg from '../svg/facebook-workplace.svg';

export interface IFacebookWorkplaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FacebookWorkplaceIcon: FC<IFacebookWorkplaceIconProps> = memo(props => {
  return <FacebookWorkplaceSvg {...props} />;
});
