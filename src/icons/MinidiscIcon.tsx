import React, { FC, memo } from 'react';
import MinidiscSvg from '../svg/minidisc.svg';

export interface IMinidiscIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinidiscIcon: FC<IMinidiscIconProps> = memo(props => {
  return <MinidiscSvg {...props} />;
});
