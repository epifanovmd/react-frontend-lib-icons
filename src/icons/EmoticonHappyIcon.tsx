import React, { FC, memo } from 'react';
import EmoticonHappySvg from '../svg/emoticon-happy.svg';

export interface IEmoticonHappyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonHappyIcon: FC<IEmoticonHappyIconProps> = memo(props => {
  return <EmoticonHappySvg {...props} />;
});
