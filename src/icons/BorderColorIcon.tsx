import React, { FC, memo } from 'react';
import BorderColorSvg from '../svg/border-color.svg';

export interface IBorderColorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderColorIcon: FC<IBorderColorIconProps> = memo(props => {
  return <BorderColorSvg {...props} />;
});
