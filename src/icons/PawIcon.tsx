import React, { FC, memo } from 'react';
import PawSvg from '../svg/paw.svg';

export interface IPawIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PawIcon: FC<IPawIconProps> = memo(props => {
  return <PawSvg {...props} />;
});
