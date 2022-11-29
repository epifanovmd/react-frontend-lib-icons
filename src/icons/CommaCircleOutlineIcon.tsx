import React, { FC, memo } from 'react';
import CommaCircleOutlineSvg from '../svg/comma-circle-outline.svg';

export interface ICommaCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommaCircleOutlineIcon: FC<ICommaCircleOutlineIconProps> = memo(props => {
  return <CommaCircleOutlineSvg {...props} />;
});
