import React, { FC, memo } from 'react';
import MixedMartialArtsSvg from '../svg/mixed-martial-arts.svg';

export interface IMixedMartialArtsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MixedMartialArtsIcon: FC<IMixedMartialArtsIconProps> = memo(props => {
  return <MixedMartialArtsSvg {...props} />;
});
