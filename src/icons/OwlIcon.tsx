import React, { FC, memo } from 'react';
import OwlSvg from '../svg/owl.svg';

export interface IOwlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OwlIcon: FC<IOwlIconProps> = memo(props => {
  return <OwlSvg {...props} />;
});
