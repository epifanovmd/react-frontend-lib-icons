import React, { FC, memo } from 'react';
import CircleExpandSvg from '../svg/circle-expand.svg';

export interface ICircleExpandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleExpandIcon: FC<ICircleExpandIconProps> = memo(props => {
  return <CircleExpandSvg {...props} />;
});
