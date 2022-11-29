import React, { FC, memo } from 'react';
import VectorLinkSvg from '../svg/vector-link.svg';

export interface IVectorLinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorLinkIcon: FC<IVectorLinkIconProps> = memo(props => {
  return <VectorLinkSvg {...props} />;
});
