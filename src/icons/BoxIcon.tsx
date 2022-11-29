import React, { FC, memo } from 'react';
import BoxSvg from '../svg/box.svg';

export interface IBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoxIcon: FC<IBoxIconProps> = memo(props => {
  return <BoxSvg {...props} />;
});
