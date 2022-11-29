import React, { FC, memo } from 'react';
import EmoticonTongueSvg from '../svg/emoticon-tongue.svg';

export interface IEmoticonTongueIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonTongueIcon: FC<IEmoticonTongueIconProps> = memo(props => {
  return <EmoticonTongueSvg {...props} />;
});
