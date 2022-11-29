import React, { FC, memo } from 'react';
import NasSvg from '../svg/nas.svg';

export interface INasIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NasIcon: FC<INasIconProps> = memo(props => {
  return <NasSvg {...props} />;
});
