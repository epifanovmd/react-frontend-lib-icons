import React, { FC, memo } from 'react';
import TuneVerticalSvg from '../svg/tune-vertical.svg';

export interface ITuneVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TuneVerticalIcon: FC<ITuneVerticalIconProps> = memo(props => {
  return <TuneVerticalSvg {...props} />;
});
