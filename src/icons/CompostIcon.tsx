import React, { FC, memo } from 'react';
import CompostSvg from '../svg/compost.svg';

export interface ICompostIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CompostIcon: FC<ICompostIconProps> = memo(props => {
  return <CompostSvg {...props} />;
});
