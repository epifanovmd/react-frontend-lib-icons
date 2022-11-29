import React, { FC, memo } from 'react';
import CatSvg from '../svg/cat.svg';

export interface ICatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CatIcon: FC<ICatIconProps> = memo(props => {
  return <CatSvg {...props} />;
});
