import React, { FC, memo } from 'react';
import EmoticonSadSvg from '../svg/emoticon-sad.svg';

export interface IEmoticonSadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonSadIcon: FC<IEmoticonSadIconProps> = memo(props => {
  return <EmoticonSadSvg {...props} />;
});
