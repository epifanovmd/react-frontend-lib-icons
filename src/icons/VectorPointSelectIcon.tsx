import React, { FC, memo } from 'react';
import VectorPointSelectSvg from '../svg/vector-point-select.svg';

export interface IVectorPointSelectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPointSelectIcon: FC<IVectorPointSelectIconProps> = memo(props => {
  return <VectorPointSelectSvg {...props} />;
});
