import React from 'react';
import { useTranslation } from 'react-i18next';
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons';

import Grid from '/voxeliface/components/Grid';
import Image from '/voxeliface/components/Image';
import Button from '/voxeliface/components/Button';
import Typography from '/voxeliface/components/Typography';

import Patcher from '/src/common/plugins/patcher';
export default Patcher.register(function Server({ name, icon, motd, type, players, address, instanceId, acceptTextures }) {
    const { t } = useTranslation();
    return <Grid height="fit-content" padding={8} spacing={12} background="$secondaryBackground2" borderRadius={8} justifyContent="space-between" css={{
        minWidth: '24rem'
    }}>
        <Grid spacing={12}>
            <Image
                src={icon ? icon.startsWith('data:') ? icon : `data:image/png;base64,${icon}` : 'img/icons/minecraft/unknown_server.png'}
                size={46}
                background="$secondaryBackground"
                borderRadius={4}
                css={{
                    minWidth: 46,
                    minHeight: 46,
                    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',

                    '&:hover': {
                        minWidth: 64,
                        minHeight: 64
                    }
                }}
            />
            <Grid height="100%" spacing={4} direction="vertical">
                <Typography size=".9rem" color="$primaryColor" family="Nunito" margin="6px 0 0" horizontal lineheight={1} whitespace="nowrap">
                    {name || t('app.mdpkm.server.default_name')}
                    {acceptTextures === 1 &&
                        <Typography size=".7rem" color="$secondaryColor" weight={300} family="Nunito" margin="4px 0 0 8px" lineheight={1}>
                            {t('app.mdpkm.server.textures_accepted')}
                        </Typography>
                    }
                </Typography>
                {motd ?
                    <span dangerouslySetInnerHTML={{ __html: motd }} style={{
                        fontSize: '.8rem',
                        textAlign: 'center',
                        fontFamily: 'Nunito'
                    }}/>
                :
                    <Typography size=".8rem" color="$secondaryColor" weight={400} family="Nunito" lineheight={1}>
                        {address || t('app.mdpkm.server.no_address')}
                    </Typography>
                }
            </Grid>
        </Grid>
        <Grid spacing={8} alignItems="center">
            <Grid height="100%" spacing={4} padding={4} direction="vertical" alignItems="end">
                {players && <Typography size=".8rem" color="$secondaryColor" family="Nunito" spacing={4} lineheight={1}>
                    {t('app.mdpkm.server.players', {
                        val: players.online,
                        max: players.max
                    })}
                </Typography>}
                {type && <Typography size=".8rem" color="$secondaryColor" family="Nunito" spacing={4} lineheight={1}>
                    {type}
                </Typography>}
            </Grid>
            {instanceId && <React.Fragment>
                <Button theme="secondary" disabled>
                    <PencilFill/>
                    {t('app.mdpkm.common:actions.edit')}
                </Button>
                <Button theme="secondary" disabled>
                    <Trash3Fill/>
                    {t('app.mdpkm.common:actions.delete')}
                </Button>
            </React.Fragment>}
        </Grid>
    </Grid>;
});