import React, { FC, memo } from 'react';
import MultimediaSvg from '../svg/multimedia.svg';

export interface IMultimediaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MultimediaIcon: FC<IMultimediaIconProps> = memo(props => {
  return <MultimediaSvg {...props} />;
});
