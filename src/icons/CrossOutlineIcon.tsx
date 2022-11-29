import React, { FC, memo } from 'react';
import CrossOutlineSvg from '../svg/cross-outline.svg';

export interface ICrossOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrossOutlineIcon: FC<ICrossOutlineIconProps> = memo(props => {
  return <CrossOutlineSvg {...props} />;
});
