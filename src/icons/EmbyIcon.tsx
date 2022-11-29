import React, { FC, memo } from 'react';
import EmbySvg from '../svg/emby.svg';

export interface IEmbyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmbyIcon: FC<IEmbyIconProps> = memo(props => {
  return <EmbySvg {...props} />;
});
