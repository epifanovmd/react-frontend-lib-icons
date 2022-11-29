import React, { FC, memo } from 'react';
import EllipseOutlineSvg from '../svg/ellipse-outline.svg';

export interface IEllipseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EllipseOutlineIcon: FC<IEllipseOutlineIconProps> = memo(props => {
  return <EllipseOutlineSvg {...props} />;
});
