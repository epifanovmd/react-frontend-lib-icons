import React, { FC, memo } from 'react';
import VoicemailSvg from '../svg/voicemail.svg';

export interface IVoicemailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VoicemailIcon: FC<IVoicemailIconProps> = memo(props => {
  return <VoicemailSvg {...props} />;
});
