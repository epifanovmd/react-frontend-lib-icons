import React, { FC, memo } from 'react';
import MosqueSvg from '../svg/mosque.svg';

export interface IMosqueIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MosqueIcon: FC<IMosqueIconProps> = memo(props => {
  return <MosqueSvg {...props} />;
});
