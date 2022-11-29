import React, { FC, memo } from 'react';
import EmoticonCrySvg from '../svg/emoticon-cry.svg';

export interface IEmoticonCryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonCryIcon: FC<IEmoticonCryIconProps> = memo(props => {
  return <EmoticonCrySvg {...props} />;
});
