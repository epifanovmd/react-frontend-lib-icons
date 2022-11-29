import React, { FC, memo } from 'react';
import SkypeSvg from '../svg/skype.svg';

export interface ISkypeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkypeIcon: FC<ISkypeIconProps> = memo(props => {
  return <SkypeSvg {...props} />;
});
