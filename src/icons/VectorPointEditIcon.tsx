import React, { FC, memo } from 'react';
import VectorPointEditSvg from '../svg/vector-point-edit.svg';

export interface IVectorPointEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPointEditIcon: FC<IVectorPointEditIconProps> = memo(props => {
  return <VectorPointEditSvg {...props} />;
});
