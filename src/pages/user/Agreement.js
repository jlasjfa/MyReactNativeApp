/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Text from '../../components/common/MyText';
type Props = {};
export default class Agreement extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <SafeAreaView style={{flex: 1, backgroundColor: whiteColor}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>一、本服务协议的内容、生效、变更</Text>
                <Text
                    style={styles.item}>{`    1.本服务协议由您与觇智科技平台订立。本服务协议阐述之条款和条件适用于您使用平台的各种工具和服务。当您确认本服务协议后，本服务协议即在您和平台之间立即产生法律约束力。`}</Text>
                <Text
                    style={styles.item}>{`    2.本协议中，“用户”为买家用户和商家用户的统称。“买家用户”指平台注册的买家用户；“商家用户”指在平台上的提供品牌产品的商家用户。`}</Text>
                <Text
                    style={styles.item}>{`    3.请您务必认真阅读全部服务协议内容，如有任何疑问，可向觇智平台咨询。您在同意所有协议条款并完成注册程序，才能成为本站的正式用户。`}</Text>
                <Text
                    style={styles.item}>{`    4.无论您事实上是否注册为觇智会员，当您在线上页面购买商品支付款项前或在使用觇智服务前均应仔细阅读本服务条款，您支付款项的行为或您使用觇智服务的行为视为您确认本服务协议，本服务协议即在您和觇智之间立即产生法律约束力。`}</Text>
                <Text style={styles.item}>{`    5.届时您不应以未阅读本协议的内容或者未获得平台对您问询的解答等理由，主张本协议无效，或要求撤销本协议。`}</Text>
                <Text
                    style={styles.item}>{`    6.本服务协议内容包括本协议正文及所有平台已经公开发布的或将来可能公开发布的各类规则。所有公开规则为协议不可分割的一部分，与协议正文具有同等法律效力。`}</Text>
                <Text
                    style={styles.item}>{`    7.平台有权根据需要不时地制定、修改本协议或各类规则。如本协议有任何变更，平台将在网站www.metchange.com（含平台移动客户端及其他登录客户端）上刊载公告或公示，不再另行单独通知用户。如平台注册用户不同意相关变更，必须停止使用"服务"。经修订的协议一经在平台网公布后，立即自动生效。各类规则会在发布生效后，亦成为本协议的一部分。登录或继续使用"服务"将表示平台用户接受经修订的协议。除另行明确声明外，任何使"服务"范围扩大或功能增强的新内容均受本协议约束。`}</Text>
                <Text style={styles.title}>二、定义及解释</Text>
                <Text
                    style={styles.item}>{`    1.觇智平台：指杭州觇智科技有限公司运营的App移动客户端（含网站www.metchange.com）并向用户提供技术服务的电子商务平台。下文“觇智”指代觇智平台及其运营方杭州觇智科技有限公司。`}</Text>
                <Text
                    style={styles.item}>{`    2.保税商品：国外商品直接从境外通过空运或海运备货到中国保税区指定跨境仓内，消费者通过网络下订单，商家用户办理海关通关手续，并缴纳相关税费的商品。`}</Text>
                <Text style={styles.item}>{`    3.直邮商品：商品从海外通过国际快递直接送达消费者手中。`}</Text>
                <Text
                    style={styles.item}>{`    4.一般贸易商品：一般贸易是指中国境内有进出口经营权的企业单边进口或单边出口的贸易，按一般贸易交易方式进出口的商品即为一般贸易商品。`}</Text>
                <Text
                    style={styles.item}>{`    5.品牌（授权）商家：指保税（含保税、直邮、一般贸易模式）商品的供货方，且持有相关品牌或获得品牌方授权或对商品具有合法来源，与觇智科技签署相关合约建立合作并于与觇智平台买家用户建立关系的商家用户，以下简称商家（供应商）用户。`}</Text>
                <Text
                    style={styles.item}>{`    6.买家用户：指在觇智平台注册或在觇智App客户端注册或虽未注册但使用觇智服务，并通过平台线上购买保税商品、直邮商品、一般贸易商品的消费者和/或其他买家用户。`}</Text>
                <Text style={styles.title}>三、用户注册及使用规则</Text>
                <Text style={styles.smallTitle}>1.注册资格</Text>
                <Text
                    style={styles.item}>{`    用户须为具有法定的相应权利能力和行为能力的自然人、法人或其他组织，能够独立承担法律责任。用户完成注册程序使用本平台服务时，即视为用户确认自己具备主体资格，能够独立承担法律责任。若因用户不具备主体资格，而导致的一切后果，由用户及用户的监护人自行承担。`}</Text>
                <Text style={styles.smallTitle}>2.注册资料</Text>
                <Text
                    style={styles.item}>{`    2.1 用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且觇智保留终止用户使用本平台各项服务的权利。`}</Text>
                <Text
                    style={styles.item}>{`    2.2 用户在本站进行浏览、下单采购等活动时，涉及用户真实姓名/名称、通信地址、联系电话等隐私信息的，本站将予以严格保密，除非得到用户的授权或法律另有规定，本站不会向外界披露用户隐私信息。`}</Text>
                <Text style={styles.smallTitle}>3.账户</Text>
                <Text
                    style={styles.item}>{`    3.1 用户注册成功后，将产生用户名和密码等账户信息，用户可以根据本站规定改变密码。用户应谨慎合理的保存、使用用户名和密码。用户若发现任何非法使用用户账号或存在安全漏洞的情况，请立即以有效方式通知本站并向公安机关报案。用户理解本站处理该等通知需要一定时间，本站对处理前已经产生的任何后果（包括用户的任何损失）不承担责任。`}</Text>
                <Text style={styles.item}>{`    3.2用户设置的会员名不得侵犯或涉嫌侵犯他人合法权益。否则，觇智有权终止向用户提供平台服务，注销账户。`}</Text>
                <Text style={styles.item}>{`    3.3 用户不得将在本站注册获得的账户借给他人使用，否则用户应承担由此产生的全部责任，并与实际使用人承担连带责任。`}</Text>
                <Text style={styles.smallTitle}>4.使用规则</Text>
                <Text
                    style={styles.item}>{`    4.1用户在使用觇智服务过程中实施的所有行为均应遵守中华人民共和国法律、法规等规范性文件及觇智各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议及相关规则。如果违反前述承诺，产生任何法律后果的，用户应以自己的名义独立承担所有的法律责任，并确保觇智免于因此遭受任何损失。`}</Text>
                <Text
                    style={styles.item}>{`    4.2用户应该严格遵守觇智的一切规则，不得出现恶意注册、恶意点击、恶意退款、恶意骗取积分等违规行为，一经发现，觇智有权取消用户资格，并追回已经发放的全部积分，同时该用户必须承担由此给觇智带来的所有损失。`}</Text>
                <Text style={styles.item}>{`    4.3 用户同意，觇智拥有通过邮件、短信电话等形式，向在本站注册、购物用户、收货人发送促销活动等告知信息的权利。`}</Text>
                <Text
                    style={styles.item}>{`    4.4 用户了解并同意，觇智有权应国家司法、行政等主管部门的要求，向其提供您在觇智平台填写的注册信息和交易记录等必要信息。如您涉嫌侵犯他人知识产权，则觇智亦有权在初步判断涉嫌侵权行为存在的情况下，向权利人提供您必要的身份信息。`}</Text>
                <Text
                    style={styles.item}>{`    4.5 用户同意，觇智有权使用用户的注册信息、用户名、密码等信息，登录进入用户的注册账户，进行证据保全，包括但不限于公证、见证等。`}</Text>
                <Text style={styles.item}>{`    4.6 觇智用户账号如果一年内无登录记录，将被视为休眠账户作冻结处理；超过两年无登录记录，觇智有权注销该账号。`}</Text>
                <Text style={styles.item}>{`    4.7 对于被觇智暂时停止或者永久停止账号的用户，觇智将不再向该用户提供服务。`}</Text>
                <Text style={styles.item}>{`    4.8 为便于提供服务，用户同意并授权觇智将用户在注册、使用本站过程中提供、形成的信息传递给觇智关联公司或合作商家。`}</Text>
                <Text style={styles.title}>四、权力与义务</Text>
                <Text style={styles.smallTitle}>1.买家用户的权利和义务</Text>
                <Text
                    style={styles.item}>{`    1.1 买家用户有义务在注册时提供自己的真实资料，并保证诸如电子邮件地址、联系电话、联系地址、邮政编码等内容的有效性及安全性，保证觇智及其他用户可以通过上述联系方式与自己进行联系。同时，渠道门店用户也有义务在相关资料实际变更时及时更新有关注册资料。买家用户应保证不以他人资料在觇智网进行注册或认证。`}</Text>
                <Text
                    style={styles.item}>{`    1.2倘若觇智认为注册资料可能使觇智承担任何法律或道义上的责任，或可能使觇智(全部或部分地) 失去觇智的服务提供商或其他的用户，或您未在觇智规定的期限内登录或再次登录App或网站，则觇智可自行全权决定对注册资料采取觇智认为必要或适当的任何行动，包括但不限于删除该类资料。渠道门店用户应保证并确认对提交给觇智的注册资料拥有全部权利，包括全部版权。`}</Text>
                <Text
                    style={styles.item}>{`    1.3买家用户有权根据本服务协议的规定以及觇智网上发布的相关规则，利用觇智网上交易平台交易商品，参加觇智的有关活动以及有权享受觇智提供的其他信息服务。`}</Text>
                <Text
                    style={styles.item}>{`    1.4买家用户了解并同意，觇智平台上的商品、价格、数量、是否有货等商品信息随时可能发生变动，平台不作特别通知。由于互联网技术原因导致网页显示信息可能会有一定的滞后性或差错，对此在合同未成立前，用户接受本平台在发现网页错误，正式向用户发出通知后，对商品信息进行调整，订单按照正确的信息执行，或取消订单。`}</Text>
                <Text
                    style={styles.item}>{`    1.5第三方物流将会把商品送到买家用户所指定的收货地址。用户了解本平台所提示的送货时间供参考，实际送货会与参考时间略有差异。平台管理者和所有者或其关联公司不对因用户及收货人原因导致无法送货或延迟送货承担责任。若发生不可抗力或其他正当合理理由导致发货延迟的，用户将给予充分理解。`}</Text>
                <Text
                    style={styles.item}>{`    1.6买家用户应当保证在使用觇智线上交易平台进行交易过程中，须遵守诚实信用的原则，不在交易过程中采取不正当竞争行为，不扰乱网上交易的正常秩序，不从事与网上交易无关的行为。`}</Text>
                <Text style={styles.item}>{`    1.7买家用户应当保证知晓保税商品为个人消费自用商品，不利用觇智网络平台/线下渠道为自身或他人提供便利用于商事、贸易等用途。`}</Text>
                <Text
                    style={styles.item}>{`    1.8买家用户应当保证在未经觇智事先书面批准的情况下不对觇智App及网站上任何属于觇智或其他觇智用户之知识产权作品或资料作任何无关其使用服务的商业性利用，包括但不限于使用或复制觇智及其他用户之商标、字号、图案、域名、网址、或觇智App及网站上的版权作品。`}</Text>
                <Text
                    style={styles.item}>{`    1.9买家用户同意对于任何法律后果的发生，用户将以自己的名义独立承担所有相应的法律责任。如因其违反有关法律或者本协议之规定或侵害了第三方的权利，使觇智遭受任何损失，受到任何第三方的索赔，或任何行政管理部门的处罚，买家用户应赔偿给觇智造成的一切损失。`}</Text>
                <Text style={styles.smallTitle}>2.商家用户的权利和义务</Text>
                <Text
                    style={styles.item}>{`    2.1 商家用户在交易平台上不得出售禁止销售的或限制销售的物品、不得买卖可能违反任何相关法律、法规、条例或规章的任何物品、不得买卖侵犯他人知识产权或其他合法权益的物品，也不得买卖违背社会公共利益或公共道德的、或是平台认为不适合在平台网上销售的物品。`}</Text>
                <Text
                    style={styles.item}>{`    2.2 商家用户有责任按照平台上成交的订单及相关条款如期向买家用户发货，负责产品的质量安全和合法性，包括相关强制认证和知识产权。并负责在规定的有效期内及时将货品发送给买家用户。`}</Text>
                <Text style={styles.item}>{`    2.3 负责产品的售后服务， 售后服务的内容以订单信息为准。商家用户应承担在保质期内因为售后服务产生的费用。`}</Text>
                <Text
                    style={styles.item}>{`    2.4 服务费。商家用户同意就其使用的平台服务向平台（或平台的关联公司/平台第三方服务合作商）支付技术服务费，技术服务费收费标准、方式等信息平台会在App及网站当中予以公布。`}</Text>
                <Text
                    style={styles.item}>{`    2.5 商家用户不得引导客户绕过平台而进行线下成交或者成交不卖的情况，该等行为包括但不限于：在产品描述页面或产品图片上留有自身联系方式；进行询盘回复中留有自身联系方式；给客户留言中直接或间接询问或留有自身联系方式，以及在邮寄商品时以各种手段留有自身联系方式等情况，从而达到线下成交目的的行为。`}</Text>
                <Text style={styles.smallTitle}>3.平台的权利和义</Text>
                <Text
                    style={styles.item}>{`    3.1平台将在现有技术上维护整个网上交易平台的正常运行，并努力提升和改进技术，使平台用户网上交易活动的顺利。但对于数据维护更新等原因造成的短时间的网络中断，平台不承担任何责任。`}</Text>
                <Text
                    style={styles.item}>{`    3.2平台有权对平台用户的注册资料及交易行为进行查阅、评估，发现注册资料或交易行为中存在任何问题或怀疑，均有权向平台用户发出询问及要求改正的通知或者直接作出删除等处理。`}</Text>
                <Text
                    style={styles.item}>{`    3.3因网上交易平台的特殊性，平台没有义务对所有平台用户的注册资料、所有的交易行为以及与交易有关的其他事项进行事先审查，权利人依法通知或行政、司法机关要求处理的，平台依法处理。`}</Text>
                <Text
                    style={styles.item}>{`    3.4对于在平台网上交易平台上的不当行为、违法行为或其它任何平台认为应当终止服务的情况，平台有权随时作出删除相关信息、冻结账户、终止服务提供等处理，而无须征得平台用户的同意。`}</Text>
                <Text
                    style={styles.item}>{`    3.5觇智为买家用户提供平台服务，包括但不限于（1）提供交易平台商品信息搜寻服务；（2）提供在线商品信息发布并管理服务；（3）提供在线订单管理服务；（4）与用户沟通，订立订单/销售合同服务；用户在此确认并同意，觇智有权单方面概括转让本协议项下的权利义务，无需征得其同意。觇智亦有权在法律允许的情况下，以用户的资金抵扣用户对觇智的债务。`}</Text>
                <Text style={styles.title}>五、商品信息</Text>
                <Text
                    style={styles.item}>{`    1.平台App上的商品信息随时有可能发生变动，平台对此不作特别通知。平台将尽合理的商业努力，使App及网站内展示的商品参数、说明、价格、库存等商品信息尽可能准确、详细，但由于App及网站上商品信息的数量极其庞大，且受互联网技术发展水平等因素的限制，网页显示的信息可能会有一定的滞后性或差错，对此情形您充分知悉并予以理解。如您发现商品信息错误的或有疑问的，请您不要提交订单，并在第一时间告诉平台。`}</Text>
                <Text
                    style={styles.item}>{`    2.除另有特别说明外，本App及网站展示的商品的价格都为含税价格（保税区商品除外）。送货运费需由用户另行支付，根据用户选择的商品、价格、区域和送货方式不同，商家可能对运费进行适当减免 （详见APP或网站内的公告或说明）。`}</Text>
                <Text
                    style={styles.item}>{`    3.您在觇智平台上购买的境外商品等同于原产地直接销售商品，因此商品本身可能无中文标签，如果需要您可以通过网站查看相关商品标签中文翻译或联系客服。根据相关法律政策，您选购的境外商品仅限于个人自用，不得进行再次销售。您购买的境外商品符合原产地有关品质、健康、标识的相关标准，与我国产品标准或有所不同，由此可能造成的危害、损失或者其他风险，觇智平台不承担责任。觇智并非商品售卖方，商品均由商家向您提供，由商家承担其商品的质量保证责任。`}</Text>
                <Text style={styles.title}>六、订单成立及履约基本规则</Text>
                <Text
                    style={styles.item}>{`    1.当平台用户下订单时，请仔细确认所购商品的商品名称、价格、数量、型号、规格、尺寸、联系地址、电话、收货人等信息。收货人与您本人不一致的，收货人的行为和意思表示视为您的行为和意思表示，您应对收货人的行为及意思表示的法律后果承担连带责任。如果因为您填写的收货人联系电话、地址等信息错误，导致无法将商品交付给非您本意的收货人的，由此造成的损失需由您自行承担。`}</Text>
                <Text
                    style={styles.item}>{`    2.您同意平台App及网站上的订单成立规则： （1）当您确定购买并成功提交订单时（您的订单内容应包含您希望购买的商品数量、价格及支付方式、收货人、联系方式、收货地址等信息），视为您向商家发出了购买订单商品的要约； （2）订单提交成功的信息是系统自动生成，并非商家对您要约的承诺。只有系统将订单信息反馈至商家，经商家确认能够满足您的订购需求并向您发货时，方视为商家对您的要约作出承诺，此时您与商家之间就该已发货商品成立了合同关系； （4）在商家与您的买卖合同成立之前，您与商家均有权取消相关商品的订单，订单取消后，您已支付的款项将退回您的付款账户。`}</Text>
                <Text
                    style={styles.item}>{`    3.商家将尽量满足您的购物需求，避免您选购的商品无货，但是由于技术障碍以及各类商家难以控制和避免的因素，商家无法保证符合您提交的订单中所有要求的商品都有货；如您订购的商品无货，商家将及时与您联系，您有权取消订单。`}</Text>
                <Text
                    style={styles.item}>{`    4.若用户购买的商品送达方式选择配送，商家将会把商品通过物流公司送到用户所指定的收货地址（收货地址在配送范围外的除外），请用户在收货前验视所送商品，当用户或用户指定的收货人、代理人在配送单或其他凭证上签字，即视为用户完成收货，并认可收货商品。用户必须准确地填写自己的真实姓名、送货地址及联系方式。因如下情况造成订单延迟或无法配送等，商家及平台不会承担迟延配送的责任，并保留单方取消订单的权利 ：（1）用户提供的身份证信息、送货地址、联系方式等信息错误或不够详细；（2）商品送达无人签收；（3）情势变更因素；（4）不可抗力，例如：自然灾害、交通戒严、罢工、骚乱、政府行为、突发战争等。`}</Text>
                <Text style={styles.title}>七、保密责任</Text>
                <Text
                    style={styles.item}>{`    1.保密资料指由一方向另一方披露的所有技术及非技术信息(包括但不限于产品资料，产品计划，价格，财务及营销规划，业务战略，客户信息，客户数据，研发，软件硬件，API应用数据接口，技术说明，设计，特殊公式，特殊算法等)。`}</Text>
                <Text
                    style={styles.item}>{`    2.本服务条款任何一方同意对获悉的对方之上述保密资料予以保密，并严格限制接触上述保密信息的员工遵守本条之保密义务。除非国家机关依法强制要求或上述保密资料已经进入公有领域外，接受保密资料的一方不得对外披露。`}</Text>
                <Text
                    style={styles.item}>{`    3.本服务条款双方明确认可各自用户信息和业务数据等是各自的重要资产及重点保密信息。本服务条款双方同意尽最大的努力保护上述保密信息等不被披露。一旦发现有上述保密信息泄露事件，双方应合作采取一切合理措施避免或者减轻损害后果的产生。`}</Text>
                <Text style={styles.item}>{`    4.本条款不因本服务条款的终止而失效。`}</Text>
                <Text style={styles.title}>八、平台服务的中断、限制和终止</Text>
                <Text
                    style={styles.item}>{`    1.出现以下情况之一时，平台有权对用户账户的部分或者全部权限或功能进行限制并取消与下列情况相关的尚未履行完毕的订单直至注销用户账户终止服务： （1）将内容或物品张贴于不适当的类别或网站或服务中不适当的地方； （2）违反任何法律、第三者之权利，或我们的政策（例如违禁品和管制物品政策、信息数据保密及知识产权政策等）； （3）在无法订立具约束力合约、未满18岁或遭平台暂时或无限期冻结的情况下，使用我们的平台或服务； 不向他人转售您购买的物品； （4）利用在本平台注册的账户进行牟利性经营活动（如批发、炒货、转卖等）； （5）规避或操纵我们的收费系统、缴款程序或应缴的平台收费； （6）以任何方式企图损害本平台的安全系统或功能； （7）张贴不实、错误、误导性、诽谤性或中伤他人的内容（包括个人资料）； （8）线下直接销售保税商品，未经所有权人同意私自拆解包裹，私自替换保税商品，掺假售假，捆绑销售； （9）未经平台同意，将自己的平台帐户（包括信用评价）和用户帐号转移给另外一人； （10）散布或张贴垃圾邮件、连锁信件或金字塔式销售；  （11）散布病毒，或散布任何可能损害平台或其他用户利益或财产之技术； （12）复制、修改或散布平台内容及平台的版权和商标； （13）未经其他用户同意而搜集或以任何方式收集包括电邮地址等用户资料。`}</Text>
                <Text
                    style={styles.item}>{`    2.用户同意，在平台未向您收取服务费的情况下，平台可自行全权决定以任何理由 (包括但不限于平台认为您已违反本协议的字面意义和精神，或以不符合本协议的字面意义和精神的方式行事，或您在超过一年的时间内未以您的帐号及密码登录平台等) 终止平台用户的"服务"密码、帐户 (或其任何部份) 或您对"服务"的使用，并删除（不再保存）平台用户在使用"服务"中提交的"平台用户资料"。同时平台可自行全权决定，在发出通知或不发出通知的情况下，随时停止提供"服务"或其任何部份。帐号终止后，平台没有义务为您保留原帐号中或与之相关的任何信息，或转发任何未曾阅读或发送的信息给您或第三方。此外，您同意，平台不就终止您接入"服务"而对您或任何第三者承担任何责任。`}</Text>
                <Text
                    style={styles.item}>{`    3. 如用户向平台提出注销其注册用户身份时，经平台审核同意，由平台注销其注册用户身份，用户即解除与平台的服务协议关系。但注销该平台用户帐号后，平台仍保留下列权利： （1）用户注销后，平台有权保留该平台用户的注册资料及以前的交易行为记录。 （2）用户注销后，如平台用户在注销前在平台交易平台上存在违法行为或违反合同的行为，平台仍可行使本服务协议所规定的权利。`}</Text>
                <Text
                    style={styles.item}>{`    4.因您违反本章程的规定而导致平台、其他商户或其他第三方损失的，您同意予以全额赔偿损失，该等损失包括但不限于律师费、诉讼费、直接损失、间接损失等。`}</Text>
                <Text style={styles.title}>九、数据收集和隐私条款</Text>
                <Text
                    style={styles.item}>{`    1.数据收集和使用。 觇智云用户在此授予觇智科技独家的、全球通用的、永久的、免费的许可使用权利 (并有权对该权利进行再授权)，使觇智科技有权(全部或部分地) 使用、复制、修订、改写、发布、翻译、分发、执行和展示觇智云平台用户公示于App及网站的全部资料数据（包括但不限于注册资料、交易行为数据及全部展示与觇智网的各类信息）或制作其他派生作品，和/或以现在已知或日后开发的任何形式、媒体或技术，将上述信息纳入其他作品内。 为方便用户使用服务及平台或其他组织的服务（以下称其他服务），平台用户在此同意并授权平台用户在账户注册/激活、使用服务过程中提供、形成的信息传递给向您提供其他服务的平台或第三方服务提供商或其他组织，或从提供其他服务的第三方获取您在注册/激活、使用其他服务期间提供、形成的信息。您同意不会追究平台运营公司及关联公司及各平台的责任。`}</Text>
                <Text style={styles.item}>{`    2.平台用户同意接收来自平台网的订单信息、促销信息及其他个性化业务信息。`}</Text>
                <Text
                    style={styles.item}>{`    3.隐私权政策。 尽管有前述数据收集和使用条款，平台不允许任何第三方以任何手段收集、编辑、出售或者无偿传播用户的个人信息，除非发生以下情况，用户的注册资料将可能部分或全部被披露：（1）经用户同意，向第三方披露；（2）系为履行用户的订单或保护用户的合法权利所必须；（3）如当事人是符合资格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；（4）根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；（5）如果用户出现违反中国有关法律或者平台政策的情况，需要向第三方披露；（6）为提供用户所要求的产品和服务，而必须和第三方分享用户的注册资料；（7）其它平台根据法律或者平台政策认为合适的披露。`}</Text>
                <Text style={styles.title}>十、免责条款</Text>
                <Text
                    style={styles.item}>{`    免责条款：平台用户明确理解和同意，平台不对因下述任一情况而发生的任何损害承担责任，包括但不限于利润、商誉、使用、数据等方面的损失或其他无形损失的损害赔偿：（1）使用或未能使用平台的服务；（2）第三方未经批准的接入或第三方更改用户的传输资料或数据；（3） 第三方对平台服务的声明或关于平台服务的行为；或因任何原因而引起的与平台有关的任何其他事宜，包括疏忽。`}</Text>
                <Text style={styles.title}>十一、不可抗力</Text>
                <Text
                    style={styles.item}>{`    由于超出合理控制范围以外的原因而使平台迟延或未能履约或未能完全履约，平台不负任何责任。此情况包括但不限于：地震、台风、水灾、战争、恐怖活动、暴动、罢工、全国性行业政策调整、政府行为、网络传输故障、网络平台商家用户原因、黑客攻击等不可抗力事件。`}</Text>
                <Text style={styles.title}>十二、法律适用和争议解决</Text>
                <Text style={styles.item}>{`    1．本服务协议之签署、效力、解释和执行以及本协议项下争议之解决等均应适用中华人民共和国法律为准据法。`}</Text>
                <Text
                    style={styles.item}>{`    2．用户与平台及其他用户的任何争端和争议，各方应友好协商解决。如协商不成，则任何一方均可将有关争议提交平台运营方住所地人民法院管辖。`}</Text>
                <Text style={styles.item}>{`    3. 诉讼进行过程中，各方将继续履行本协议未涉诉讼的其他部分。`}</Text>
                <Text style={styles.title}>十三、特别声明</Text>
                <Text
                    style={styles.item}>{`    1、觇智科技郑重提示：为享有高效优质的服务，请您务必仔细阅读并确保完全理解www.metchange.com网站下的《觇智云平台服务条款》，www.metchange.com的服务条款是最新版本。您完全理解并认可明白，www.metchange.com有“觇智云平台服务”服务的最新版本，任何人士和机构提供的文件（包括但不限于本合同）中有关“觇智云平台服务”服务描述与该服务条款矛盾的，以该服务条款为准。`}</Text>
                <Text
                    style={styles.item}>{`    2、由于互联网的高速发展，您与觇智科技签订的本协议列明的条款并不能完整罗列并覆盖您与觇智科技所有的权利与义务，因此，觇智科技将根据业务变化，不定时颁布相应的规则，该等规则均是协议不可分割的一部分，与本协议具有同等法律效力，觇智科技以App及网站公告的形式进行更新，不再单独通知予您。经修订的“条款”一经在觇智云系统公布，即产生相应的效力。如您不同意相关修订，请您立即停止使用“服务”。如您继续使用“服务”，则将视为您已接受经修订的“条款”，当您与觇智科技发生争议时，应以最新的“条款”为准。`}</Text>
                <Text
                    style={styles.item}>{`    3、如果任何条款在性质上或其他方面理应地在此协议终止时继续存在，那么应视为继续存在的条款，这些条款包括但不局限于保证条款、保密条款、知识产权条款、法律适用及争议解决条款。`}</Text>
            </ScrollView>
        </SafeAreaView>

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: whiteColor,
        paddingTop: 10,
        paddingBottom: 10,

    },
    title: {
        fontSize: 18,
        lineHeight: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    smallTitle: {
        marginTop: 6,
        lineHeight: 20,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 16
    },
    item: {
        marginTop: 6,
        lineHeight: 20,
        paddingLeft: 10,
        paddingRight: 10,
    }

});
