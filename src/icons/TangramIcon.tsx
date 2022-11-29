import React, { FC, memo } from 'react';
import TangramSvg from '../svg/tangram.svg';

export interface ITangramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TangramIcon: FC<ITangramIconProps> = memo(props => {
  return <TangramSvg {...props} />;
});
