import React, { FC, memo } from 'react';
import SkypeBusinessSvg from '../svg/skype-business.svg';

export interface ISkypeBusinessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkypeBusinessIcon: FC<ISkypeBusinessIconProps> = memo(props => {
  return <SkypeBusinessSvg {...props} />;
});
